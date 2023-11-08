import axios from 'axios';
import React from 'react';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials : true
  });

const useAxios = () => {
    return instance;
};

export default useAxios;