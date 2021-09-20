// sitemapMiddleware.js
 
import VueRouterSitemap      from 'vue-router-sitemap';
import path                  from 'path';
 import router from "./router";
 //const express = require('express');
  //const app = require('express');
export const sitemapMiddleware = () => {
  return (req, res) => {
    res.set('Content-Type', 'application/xml');

    const staticSitemap = path.resolve('dist/static', 'sitemap.xml');
    const filterConfig = {
      isValid: false,
      rules: [
       {
          path: "/",
          name: "Kovered",
          component: Home,
          beforeEnter: defaultRoute
        },
      ],
    };
 
    new VueRouterSitemap(Router).filterPaths(filterConfig).build('https://dev.kovered.io').save(staticSitemap);
 
    return res.sendFile(staticSitemap);
  };
};
 
 //app.get('/sitemap.xml', sitemapMiddleware());