class RouteData {
	constructor(path, props) {
		props = props || {}
		this.props = props || {}

		Object.assign(this, props)

		this.INDEX = path
	}
}

const APP_ROUTES = {
	HOMEPAGE: new RouteData('/'),
	ABOUT: new RouteData('/about', {}),
	STORIES: new RouteData('/stories', {}),
	STORY_DETAIL: new RouteData('/stories/', {}),
	PROJECTS: new RouteData('/projects', {}),
	PROJECT_DETAIL: new RouteData('/projects/', {}),
	PLAYGROUND: new RouteData('/playground/', {}),
}

export default APP_ROUTES
