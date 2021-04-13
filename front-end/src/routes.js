/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import ChatView from 'src/views/chat/';
import DashboardView from 'src/views/reports/DashboardView';
import HomeView from 'src/views/home/HomeView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import LoginView from 'src/views/auth/LoginView';
import SettingsView from 'src/views/settings/SettingsView';
import NewQuiz from 'src/views/product/ProductListView/newQuiz';
import Collections from 'src/views/collection';
import ClassView from 'src/views/classes';
import EditCollection from 'src/views/collection/edit';
import EditClass from 'src/views/classes/edit';
import AuthProtect from 'src/components/AuthProtect';
import StudentHome from 'src/views/student/home';
import QuizLayout from './layouts/QuizLayout';
import OnlyHeaderLayout from './layouts/OnlyHeaderLayout';
import ClassLayout from './layouts/ClassLayout';
import StudentLayout from './layouts/StudentLayout';
// import StoreContext from 'src/context/index';

// const { store } = React.useContext(StoreContext);

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'chat', element: <ChatView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/app/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <HomeView /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'teacher',
    element: <DashboardLayout />,
    children: [
      {
        path: 'home', element: <ProductListView />
      },
      { path: 'account', element: <AccountView /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'collections', element: <Collections /> },
      { path: 'class', element: <ClassView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/teacher/404" /> }
    ]
  },
  {
    path: 'teacher',
    element: <QuizLayout />,
    children: [
      { path: 'new', element: <NewQuiz /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/teacher/404" /> }
    ]
  },
  {
    path: 'collection',
    element: <OnlyHeaderLayout />,
    guard: AuthProtect,
    children: [
      { path: 'edit', element: <EditCollection /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/collection/404" /> }
    ]
  },
  {
    path: 'class',
    element: <ClassLayout />,
    guard: AuthProtect,
    children: [
      { path: 'edit', element: <EditClass /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/class/404" /> }
    ]
  },
  {
    path: 'student',
    element: <StudentLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'home', element: <StudentHome /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/student/404" /> }
    ]
  },
];

export default routes;
