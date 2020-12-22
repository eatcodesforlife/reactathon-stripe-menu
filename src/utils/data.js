import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    id: 1,
    links: [
      { id: 1, label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { id: 2, label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { id: 3, label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    id: 2,
    links: [
      { id: 1, label: 'plugins', icon: <FaBook />, url: '/products' },
      { id: 2, label: 'libraries', icon: <FaBook />, url: '/products' },
      { id: 3, label: 'help', icon: <FaBook />, url: '/products' },
      { id: 4,label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    id: 3,
    links: [
      { id: 1, label: 'about', icon: <FaBriefcase />, url: '/products' },
      { id: 2, label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
