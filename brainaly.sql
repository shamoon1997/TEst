/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.14-MariaDB : Database - brainaly
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`brainaly` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `brainaly`;

/*Table structure for table `classes` */

DROP TABLE IF EXISTS `classes`;

CREATE TABLE `classes` (
  `cl_id` int(11) NOT NULL AUTO_INCREMENT,
  `cl_uid` varchar(50) DEFAULT NULL,
  `cl_cover` varchar(255) DEFAULT NULL,
  `cl_name` varchar(255) DEFAULT NULL,
  `cl_description` text DEFAULT NULL,
  `cl_user_id` int(11) DEFAULT NULL,
  `cl_students` text DEFAULT NULL,
  `cl_createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`cl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `classes` */

/*Table structure for table `collections` */

DROP TABLE IF EXISTS `collections`;

CREATE TABLE `collections` (
  `col_id` int(11) NOT NULL AUTO_INCREMENT,
  `col_name` varchar(255) DEFAULT NULL,
  `col_description` text DEFAULT NULL,
  `col_image` varchar(255) DEFAULT NULL,
  `col_quiz` text DEFAULT NULL,
  `col_uid` varchar(255) DEFAULT NULL,
  `col_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`col_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `collections` */

/*Table structure for table `questions` */

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `q_id` int(11) NOT NULL AUTO_INCREMENT,
  `q_name` varchar(30) DEFAULT NULL,
  `q_description` varchar(200) DEFAULT NULL,
  `q_cover` varchar(255) DEFAULT NULL,
  `q_share` tinyint(1) DEFAULT 0,
  `q_music_id` int(11) DEFAULT NULL,
  `q_play_num` int(11) DEFAULT NULL,
  `q_user_id` int(11) DEFAULT NULL,
  `q_created_at` date DEFAULT NULL,
  `q_updated_at` date DEFAULT NULL,
  `q_uid` varchar(100) DEFAULT NULL,
  `q_content` text DEFAULT NULL,
  PRIMARY KEY (`q_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `questions` */

insert  into `questions`(`q_id`,`q_name`,`q_description`,`q_cover`,`q_share`,`q_music_id`,`q_play_num`,`q_user_id`,`q_created_at`,`q_updated_at`,`q_uid`,`q_content`) values 
(1,'New question','This is new question description.','1618191470682-aaa.jpg',0,NULL,NULL,NULL,NULL,NULL,'b3aa93fc-9026-d507-3e9c-8b6396fd09c2','[{\"href\":\"\",\"title\":\"\",\"quizType\":1,\"quizAnswer\":[{\"sel\":1,\"answer\":\"This is crazy misha\"},{\"sel\":0,\"answer\":\"Mishuka\"},{\"sel\":0,\"answer\":\"Misha & bear\"},{\"sel\":0,\"answer\":\"asdfasdf asdfasdf\"}],\"quizTime\":90,\"point\":2,\"image\":\"1618191477043-Crazy Misha.jpg\"}]');

/*Table structure for table `sub_questions` */

DROP TABLE IF EXISTS `sub_questions`;

CREATE TABLE `sub_questions` (
  `sub_id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_title` varchar(30) DEFAULT NULL,
  `sub_description` varchar(100) DEFAULT NULL,
  `sub_image` varchar(50) DEFAULT NULL,
  `sub_type` varchar(10) DEFAULT NULL,
  `sub_time_limit` int(11) DEFAULT NULL,
  `sub_point` int(11) DEFAULT NULL,
  `sub_ans_type` varchar(10) DEFAULT NULL,
  `sub_sequence` int(11) DEFAULT NULL,
  `sub_created_at` date DEFAULT NULL,
  `sub_updated_at` date DEFAULT NULL,
  `sub_quiz_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sub_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sub_questions` */

insert  into `sub_questions`(`sub_id`,`sub_title`,`sub_description`,`sub_image`,`sub_type`,`sub_time_limit`,`sub_point`,`sub_ans_type`,`sub_sequence`,`sub_created_at`,`sub_updated_at`,`sub_quiz_id`) values 
(1,'test_sub','test_description',NULL,'quiz',20,1,'multi',1,'2021-03-03','2021-03-03',NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(30) DEFAULT NULL,
  `u_birthday` date DEFAULT NULL,
  `u_email` varchar(30) DEFAULT NULL,
  `u_pwd` varchar(100) DEFAULT NULL,
  `u_payment_info` varchar(30) DEFAULT NULL,
  `u_type` varchar(20) DEFAULT NULL,
  `u_school` varchar(80) DEFAULT NULL,
  `u_avatar` varchar(40) DEFAULT NULL,
  `u_email_verified` tinyint(1) DEFAULT 0,
  `u_email_verify_code` int(11) DEFAULT NULL,
  `u_membership_type` int(11) DEFAULT NULL,
  `u_expire_date` date DEFAULT NULL,
  `u_free_remain_time` int(11) DEFAULT 7,
  `u_created_at` timestamp NULL DEFAULT NULL,
  `u_updated_at` timestamp NULL DEFAULT NULL,
  `u_phonenumber` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`u_id`,`u_name`,`u_birthday`,`u_email`,`u_pwd`,`u_payment_info`,`u_type`,`u_school`,`u_avatar`,`u_email_verified`,`u_email_verify_code`,`u_membership_type`,`u_expire_date`,`u_free_remain_time`,`u_created_at`,`u_updated_at`,`u_phonenumber`) values 
(1,'longman',NULL,'azzipcirolac@gmail.com','$2a$10$89WtnwehSVFEdtzdh00Doulpu6JidJ4JAnCIxVP8VKlrYz9amWGH2',NULL,'teacher',NULL,NULL,0,NULL,NULL,NULL,7,NULL,NULL,NULL),
(2,'xiaorizhang',NULL,'xiaorizhang15@gmail.com','$2a$10$CuNROuHcPtdyJuq32ikUfuzRxj7uvj/5RIeaK.GFe3hTXy7MGU7am',NULL,'teacher',NULL,NULL,0,NULL,NULL,NULL,7,NULL,NULL,NULL),
(5,'limonovadfadf','2021-04-21','limonovdev@mail.ru','$2a$10$WrXnFhy2lfBsMwt8OxYPg.hQdLTa5VyXfF0BV8DY1KEn189XKVZo2',NULL,'teacher','adfadfasdfadf','1618192040189-pritty.jpg',0,NULL,NULL,NULL,7,NULL,NULL,'999999999'),
(6,'aaa','2021-03-23','aaaa@aaaa.com','$2a$10$XprH8E9q91U66MbtmNhSGet2gPijCFJ8F42LJHSUAG8aXRFzPWDL6',NULL,'student',NULL,NULL,0,NULL,NULL,NULL,7,NULL,NULL,NULL),
(7,'aaaa','2021-03-25','fernando.boyka@yandex.com','$2a$10$AA61WSDK7GB86vTP3MJk.urWg3hZWsqpvIGzitwbwS2PLNbrGTYAG',NULL,'teacher',NULL,NULL,0,NULL,NULL,NULL,7,NULL,NULL,NULL),
(8,'Maksim Balashov','1998-01-28','maksi.balashov@mail.ru','$2a$10$lD5H2hMpo/78iPgk7.yFnuHHbypQ.9x8FGWWsPOlPHR6I3ypOjEE6',NULL,'student','ad fasdf asdf aa','1618193096601-Awesome.jpg',0,NULL,NULL,NULL,7,NULL,NULL,'34534345444');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
