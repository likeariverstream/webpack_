import React from "react";
import { render } from "react-dom";
import AppService from "./modules/app.service";
import App from "./App";
import { config } from "./modules/config";
import './modules/ts.module'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
console.log(config.key)

const service = new AppService('Hello')
service.log()

render(<App />, document.getElementById('app'))
