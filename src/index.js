import React from "react";
import { createRoot } from "react-dom/client";
import AppService from "./modules/app.service";
import App from "./App";
import { config } from "./modules/config";
import './modules/ts.module'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
console.log(config.key)
console.log(createRoot)
const service = new AppService('Hello')
service.log()


const root = createRoot(document.getElementById('app'))
root.render(<App />)
