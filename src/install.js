import EnButton from './components/actions/EnButton.vue';

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("en-button", EnButton);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

EnButton.install = install;

export default EnButton;