import AppService from "./modules/app.service";
import './modules/header.component'
import { config } from "./modules/config";
import './css/index.css'
console.log(styles)
console.log(config.key)

const service = new AppService('Hello')
service.log()
