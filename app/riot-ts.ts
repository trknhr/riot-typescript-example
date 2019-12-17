import { register, RiotComponentShell } from "riot"

export function registerClass(element: Function, tagTemplate: RiotComponentShell) {
	function registerTag(component: RiotComponentShell) {
		const clazz: any = element
		const instance = new clazz()
		console.log(instance)
		const registered = register(component.name || "", Object.assign(component, {
			exports: {
				...instance.__proto__
			}
		}))
		element.prototype.update = (registered.get(component.name || "") as any).update
		return component.name;
	}

	element.prototype.tagName = registerTag(tagTemplate);
}

export function template(template: RiotComponentShell) {
	return function(target: Function) {
      registerClass(target, template);
   }
}
