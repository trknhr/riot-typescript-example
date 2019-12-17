import '@riotjs/hot-reload'
import { mount } from 'riot'

const scripts = require.context("./", true, /^(?!.*\.d\.ts$).*\.ts$/);
scripts.keys().forEach(scripts);

mount("#app", {title: 'Hi there!'}, "random")

