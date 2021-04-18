/*
SQLyog Community
MySQL - 10.4.14-MariaDB : Database - brainaly
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`brainaly` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `brainaly`;

/*Table structure for table `chats` */

DROP TABLE IF EXISTS `chats`;

CREATE TABLE `chats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `m_from_id` int(11) DEFAULT NULL,
  `m_to_id` int(11) DEFAULT NULL,
  `m_content` text DEFAULT NULL,
  `m_read_at` timestamp NULL DEFAULT NULL,
  `m_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=263 DEFAULT CHARSET=utf8mb4;

/*Data for the table `chats` */

insert  into `chats`(`id`,`m_from_id`,`m_to_id`,`m_content`,`m_read_at`,`m_created_at`) values 
(203,1,5,'Hi','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(204,1,5,'Nice to meet you','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(205,1,5,'There?','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(206,1,5,'I am find','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(207,1,5,'Hi','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(208,1,5,'Nice to meet you','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(209,1,5,'I am just gone through your post more carefully.','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(210,1,5,'Ko','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(211,1,5,'Can you help me?','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(212,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(213,5,1,'There?','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(214,5,1,'345345','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(215,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(216,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(217,5,1,'Read','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(218,1,5,'Nice to meet you','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(219,1,5,'Halo','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(220,1,5,'asd','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(221,1,5,'567','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(222,1,5,'THere?','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(223,1,5,'?','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(224,1,5,'THere?','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(225,1,5,'hola','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(226,5,1,'There?','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(227,5,1,'Nice to meet you','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(228,1,5,'I hope you are well','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(229,1,5,'Hi','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(230,5,1,'There?','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(231,1,5,'a','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(232,1,5,'a','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(233,1,5,'a','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(234,1,5,'sdfsdf','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(235,1,5,'asdfasdf','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(236,5,1,'oo','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(237,5,1,'','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(238,5,1,'555','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(239,5,1,'','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(240,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(241,5,1,'w','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(242,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(243,1,5,'THere?','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(244,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(245,5,1,'There?','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(246,5,1,'Nice to meeet you','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(247,5,1,'Hello','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(248,5,1,'Hello','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(249,5,1,'Nice to meet you!','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(250,1,5,'Hi','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(251,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(252,5,1,'THere?','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(253,5,1,'Hi','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(254,1,5,'There?','2021-04-15 03:55:02','2021-04-15 03:55:02'),
(255,5,1,'Nice to meeet you','2021-04-14 10:31:13','2021-04-14 10:31:13'),
(256,5,1,'How ',NULL,'2021-04-14 10:32:05'),
(257,1,10,'Hi',NULL,'2021-04-14 11:14:42'),
(258,9,1,'Nice to meet you','2021-04-14 11:28:23','2021-04-14 11:28:23'),
(259,1,9,'Hi','2021-04-14 11:28:31','2021-04-14 11:28:31'),
(260,1,9,'Nice to meet you','2021-04-14 11:28:31','2021-04-14 11:28:31'),
(261,9,1,'Thank you',NULL,'2021-04-14 11:28:27'),
(262,9,1,'How are you?',NULL,'2021-04-14 11:28:30');

/*Table structure for table `classes` */

DROP TABLE IF EXISTS `classes`;

CREATE TABLE `classes` (
  `cl_id` int(11) NOT NULL AUTO_INCREMENT,
  `cl_uid` varchar(50) DEFAULT NULL,
  `cl_cover` varchar(255) DEFAULT NULL,
  `cl_name` varchar(255) DEFAULT NULL,
  `cl_description` text DEFAULT NULL,
  `cl_students` text DEFAULT NULL,
  `cl_user_id` int(11) DEFAULT NULL,
  `cl_createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`cl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `classes` */

insert  into `classes`(`cl_id`,`cl_uid`,`cl_cover`,`cl_name`,`cl_description`,`cl_students`,`cl_user_id`,`cl_createdAt`) values 
(7,'7aca4745-0923-1622-e781-7261f4721205','','123123123123123','123123123123123123123123','[9,10]',5,'2021-04-17 04:14:50');

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
  `col_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`col_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `collections` */

insert  into `collections`(`col_id`,`col_name`,`col_description`,`col_image`,`col_quiz`,`col_uid`,`col_user_id`,`col_created_at`) values 
(1,'test col','text collections','1618243195071-avatar.jpg','[{\"id\":\"b3aa93fc-9026-d507-3e9c-8b6396fd09c2\"}]','b3997e29-55be-5956-531e-c0e61dd4b3ea',NULL,'2021-04-14 12:20:54'),
(4,'34534','53453453453445345345345345345345','','[{\"id\":\"3ab461fd-20ff-585a-4303-270ac7121d3d\"},{\"id\":\"db94c37e-27b3-104b-261d-958b0a1c0a94\"}]','b12354fa-36f1-4165-d319-24d3f476eb95',1,'2021-04-14 12:20:54'),
(5,'qweqw','qweqweqweqweqwe',NULL,NULL,NULL,NULL,'2021-04-14 12:20:54'),
(6,'qweq','weqweqweqweqweqeqweqwe','','[]','2b117799-c6c6-fb4d-c84b-251ca72bca32',1,'2021-04-14 12:20:54'),
(8,'123','123123123123123123123','','[]','54e6156d-014a-da39-b7ce-af0733c313a6',5,'2021-04-15 21:50:33');

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
  `q_updated_at` date DEFAULT NULL,
  `q_uid` varchar(100) DEFAULT NULL,
  `q_content` text DEFAULT NULL,
  `q_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`q_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

/*Data for the table `questions` */

insert  into `questions`(`q_id`,`q_name`,`q_description`,`q_cover`,`q_share`,`q_music_id`,`q_play_num`,`q_user_id`,`q_updated_at`,`q_uid`,`q_content`,`q_created_at`) values 
(18,'234','234234234234234234','',0,NULL,NULL,4,NULL,'faaac241-718c-11f2-1d8f-b9eac77d3c6f','[{\"href\":\"\",\"title\":\"\",\"quizType\":1,\"image\":\"\",\"quizAnswer\":[{\"sel\":0,\"answer\":\"\"},{\"sel\":0,\"answer\":\"\"},{\"sel\":0,\"answer\":\"\"},{\"sel\":0,\"answer\":\"\"}],\"quizTime\":20,\"point\":2}]','2021-04-14 12:22:45')