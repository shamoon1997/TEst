const express = require("express");
var multer = require('multer');
const router = express.Router();
const bcrypt = require("bcryptjs")
// mysql connection

const mysql = require('mysql');
const host = 'localhost';
const user = 'root';
const password = '';
const database = 'brainaly';

const con = mysql.createConnection({
  host,
  user,
  password,
  database,
});

const {
  getTotalQuiaNum
} = require("./helper");

con.connect();
var saltRounds = 10;
var limitNum = 3;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).single('file')
//====== Image upload
router.post("/upload", async (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
  return res.status(200).send(req.file)
  })
})

// ======= Update quiz

router.post("/updatequiz", async (req, res) => {
  console.log(req.body.id);
  const query = "UPDATE `questions` SET `q_content`='"+req.body.data+"' WHERE `q_uid` = '"+req.body.id+"'";
  await con.query(query, (err, result) => {
    if(err) throw err;
    res.json({
      data: result,
      message: 'success'
    })
  });
});

router.post("/getbyid", async (req, res) => {
  console.log(req.body)
  const query = "SELECT * FROM `questions` WHERE q_uid = '"+req.body.id+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
})

router.post("/deletequiz", async (req, res) => {
  console.log(req.body)
  const query = "DELETE FROM `questions` WHERE `q_uid` = '"+req.body.uid+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
})

//============ Insert new quiz
router.post("/newquiz", async (req, res) => {
  console.log(req.body);
  const query = "INSERT INTO `questions` (`q_uid`, `q_name`, `q_description`, `q_content`, `q_cover`, `q_user_id`) VALUES  ('" + req.body.uid + "', '" + req.body.title + "', '" + req.body.description + "', '"+req.body.content+ "', '"+req.body.cover+"', '"+req.body.userid+"'); ";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    res.json({
      flag: true,
      data: {
        uid: req.body.uid,
      },
      msg: "Contratulation! Create new Quiz is Success"
    })
    res.send();
  });
})

// ================user sign up api
router.post("/signup", async (req, res) => {
  var userEmail = req.body.userEmail;
  var userName = req.body.userName;
  var userPwd = req.body.userPwd;
  var userType = req.body.userType;
  console.log(req.body)
  const query1 = "select * from users where u_email = '" + userEmail + "'";

  console.log("userSign up")
  var flag = false
  res.setHeader('Content-Type', 'text/html');
  await con.query(query1, (err, result, fields) => {
    if (err) throw err;
    if (result.length) {
      flag = true
      res.json({
        flag: false,
        data: "",
        msg: "Email Already Exist!"
      })
      res.send();
      
    } else {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
          throw err
        } else {
          bcrypt.hash(userPwd, salt, function (err, hash) {
            if (err) {
              throw err
            } else {
              //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
              const query1 = "INSERT INTO `users` (`u_name`, `u_email`, `u_pwd`, `u_type`) VALUES ('" + userName + "', '" + userEmail + "', '" + hash + "', '"+userType+"'); ";
              con.query(query1, (err, result, fields) => {
                if (err) throw err;
                res.json({
                  flag: true,
                  data: {
                    userName: userName,
                    userEmail: userEmail,
                    token: hash
                  },
                  msg: "Contratulation! Sign Up is Success"
                })
                res.send();
              });
            }
          })
        }
      })
    }
  });
});

router.post("/signin", async (req, res) => {
  var userEmail = req.body.userEmail;
  var userPwd = req.body.userPwd;
  const query1 = "select * from users where u_email = '" + userEmail + "'";
  res.setHeader('Content-Type', 'text/html');
  await con.query(query1, (err, result, fields) => {
    console.log(result[0].u_pwd, userPwd, "when user signin", result)
    if (err) throw err;
    if (result.length) {
      bcrypt.compare(userPwd, result[0].u_pwd, function(err, isMatch) {
        if (err) {
          throw err
        } else if (!isMatch) {
          res.json({
            flag: false,
            data: "",
            msg: "Email or Password is incorrect!"
          })
          res.send();
        } else {
          res.json({
            flag: true,
            data: result[0],
            msg: "Login Success!"
          });
          res.send();
        }
      })
      
      
    } else {
      res.json({
        flag: false,
        data: "",
        msg: "Email or Password is incorrect!"
      })
      res.send();
    }
  });
});

router.post("/getquizlist", async (req, res) => {
  const query = "SELECT * FROM `questions` WHERE q_user_id = '"+req.body.userid+"' LIMIT "+limitNum+" OFFSET 0";
  var totalNum = 0;
 
  await con.query("SELECT * FROM `questions` WHERE q_user_id = '"+req.body.userid+"'", (err, result, fields) => {
    if (err) throw err;
    console.log(result.length)
    totalNum = result.length
  });

  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    res.json({
      result,
      msg: "fetch success",
      total: totalNum
    })
    res.send();
  });
});

router.post("/getquizpage", async (req, res) => {
  var pageNum = req.body.pageNum - 1; 
  if(pageNum < 0 ){
    pageNum = 0
  }
  console.log(req.body, pageNum)
  const query = "SELECT * FROM `questions`  WHERE q_user_id = '"+req.body.userid+"' LIMIT "+limitNum+" OFFSET "+pageNum * limitNum;
  var totalNum = 0;
 
  await con.query("SELECT * FROM `questions`  WHERE q_user_id = '"+req.body.userid+"'", (err, result, fields) => {
    if (err) throw err;
    console.log(result.length)
    totalNum = result.length
  });

  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    res.json({
      result,
      msg: "fetch success",
      total: totalNum
    })
    res.send();
  });
});

router.post("/getbyid", async (req, res) => {
  console.log(req.body)
  const query = "SELECT * FROM `questions` WHERE q_uid = '"+req.body.id+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
});

// ===========  Collection functions

router.post("/newcollection", async (req, res) => {
  console.log(req.body);
  const query = "INSERT INTO `collections` (`col_uid`, `col_name`, `col_description`, `col_image`, `col_quiz`, `col_user_id`) VALUES  ('" + req.body.uid + "', '" + req.body.title + "', '" + req.body.description + "', '"+req.body.cover+"', '" + req.body.quiz+ "', '" + req.body.userid + "'); ";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    res.json({
      flag: true,
      data: {
        uid: req.body.uid,
      },
      msg: "Contratulation! Create new Quiz is Success"
    })
    res.send();
  });
});

router.post("/deleteCol", async (req, res) => {
  console.log(req.body)
  const query = "DELETE FROM `collections` WHERE `col_uid` = '"+req.body.colId+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
})

router.post("/getcollist", async (req, res) => {
  const query = "SELECT * FROM `collections` WHERE col_user_id = '"+req.body.userid+"' LIMIT "+limitNum+" OFFSET 0";
  var totalNum = 0;

  await con.query("SELECT * FROM `collections` WHERE col_user_id = '"+req.body.userid+"'", (err, result, fields) => {
    if (err) throw err;
    console.log(result.length)
    totalNum = result.length
  });

  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    res.json({
      result,
      msg: "fetch success",
      total: totalNum
    })
    res.send();
  });
});

router.post("/getcolpage", async (req, res) => {
  var pageNum = req.body.pageNum - 1; 
  if(pageNum < 0 ){
    pageNum = 0
  }
  var offset = pageNum * limitNum;

  const query = "SELECT * FROM `collections` WHERE col_user_id = '"+req.body.userid+"' LIMIT "+limitNum+" OFFSET "+offset;
  var totalNum = 0;

  await con.query("SELECT * FROM `collections` WHERE col_user_id = '"+req.body.userid+"'", (err, result, fields) => {
    if (err) throw err;
    console.log(result.length)
    totalNum = result.length
  });

  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    res.json({
      result,
      msg: "fetch success",
      total: totalNum
    })
    res.send();
  });
});
router.post("/getcolbyid", async (req, res) => {
  console.log(req.body)
  const query = "SELECT * FROM `collections` WHERE col_uid = '"+req.body.id+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
});
router.post("/updatecol", async (req, res) => {
  console.log(req.body);
  let addText = '';
  if(req.body.cover===null || req.body.cover === ''){
    addText = '';
  } else {
    addText = ", `col_image`= '"+ req.body.cover+"'";
  }
  const query = "UPDATE `collections` SET `col_name`='"+req.body.title+"', `col_description`='"+req.body.description+"'"+addText+" WHERE `col_uid` = '"+req.body.uid+"'";
  await con.query(query, (err, result) => {
    if(err) throw err;
    res.json({
      data: result,
      message: 'success'
    })
  });
});
router.post("/updatequizlist", async (req, res) => {
  console.log(req.body);
  const query = "UPDATE `collections` SET `col_quiz`='"+req.body.quiz+"' WHERE `col_uid` = '"+req.body.uid+"'";
  await con.query(query, (err, result) => {
    if(err) throw err;
    res.json({
      data: result,
      message: 'success'
    })
  });
});

// Class
router.post("/newclass", async (req, res) => {
  console.log(req.body);
  const query = "INSERT INTO `classes` (`cl_uid`, `cl_cover`, `cl_name`, `cl_description`, `cl_user_id`, `cl_students`) VALUES  ('" + req.body.uid + "', '" + req.body.cover + "', '" + req.body.title + "', '"+req.body.description+"', '" + req.body.userid+"', '" + req.body.students+ "'); ";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    res.json({
      flag: true,
      data: {
        uid: req.body.uid,
      },
      msg: "Contratulation! Create new Quiz is Success"
    })
    res.send();
  });
});

router.post("/deleteclass", async (req, res) => {
  console.log(req.body)
  const query = "DELETE FROM `classes` WHERE `cl_uid` = '"+req.body.cls_uid+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
})
router.post("/getclasslist", async (req, res) => {
  var totalNum = 0;
  var pageNum = req.body.pageNum - 1; 
  if(pageNum < 0 ){
    pageNum = 0
  }
  const query = "SELECT * FROM `classes` WHERE cl_user_id = '"+req.body.userid+"' LIMIT "+limitNum+" OFFSET "+limitNum * pageNum;
  await con.query("SELECT * FROM `classes` WHERE cl_user_id = '"+req.body.userid+"'", (err, result, fields) => {
    if (err) throw err;
    console.log(result.length)
    totalNum = result.length
  });

  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      result,
      total: totalNum
    })
  })
});
router.post("/getclassbyid", async (req, res) => {
  console.log(req.body)
  const query = "SELECT * FROM `classes` WHERE cl_uid = '"+req.body.id+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
});
router.post("/updateclass", async (req, res) => {
  console.log(req.body);
  let addText = '';
  if(req.body.cover===null || req.body.cover === ''){
    addText = '';
  } else {
    addText = ", `cl_cover`= '"+ req.body.cover+"'";
  }
  const query = "UPDATE `classes` SET `cl_name`='"+req.body.title+"', `cl_description`='"+req.body.description+"'"+ addText + " WHERE `cl_uid` = '"+req.body.uid+"'";
  await con.query(query, (err, result) => {
    if(err) throw err;
    res.json({
      data: result,
      message: 'success'
    })
  });
});
router.post("/getstubyid", async (req, res) => {
  console.log(req.body)
  const query = "SELECT * FROM `users` WHERE u_id = '"+req.body.id+"'";
  await con.query(query, (err, result, fields) => {
    if(err) throw err;
    console.log(result)
    res.json({
      data: result
    })
  })
});

//Profile

router.post("/updateprofile", async (req, res) => {
  const query = "UPDATE `users` SET `u_name` = '"+req.body.userName+"',  `u_birthday` = '"+req.body.user_birth+"',  `u_email` = '"+req.body.userEmail+"', `u_school` = '"+req.body.userSchool+"',  `u_avatar` = '"+req.body.userAvatar+"', `u_phonenumber` = '"+req.body.userPhone+"' WHERE `u_id` = "+req.body.userId;
  console.log(query);
  await con.query(query, (err, result) => {
    if(err) throw err;
    res.json({
      data: result,
      message: 'success'
    })
  });
});

router.post("/getusers", async (req, res) => {
  console.log(req.body);
  // const query = "SELECT * FROM `users` WHERE u_id != '"+req.body.userId+"'";
  const query = "SELECT * FROM `users`";
  console.log(query);
  await con.query(query, (err, result) => {
    if(err) throw err;
    res.json({
      data: result,
      message: 'success'
    })
  });
});

module.exports = router;