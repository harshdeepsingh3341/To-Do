export const STYLE_CONSTANTS = {
	PRIMARY_COLOR: {
		DEFAULT: '#2196F3',
		LIGHT: '#64B5F6'
	},
	SECONDARY_COLOR: {
		DEFAULT: '#FF9800',
		DARK: '#df8000'
	},
	BACKGROUND_COLOR: '#fafafa',
	BORDER_RADIUS: '3px',
	BLACK_COLOR: '#8d8d8d'
};

export const SIDEBAR_MENUS = [
	{
		id: 1,
		name: 'inbox',

	}
];

export const API_VERSION = {
	VERSION_1: 'v1'
};

export const API_ENDPONT = `http://localhost:8080/api/${API_VERSION.VERSION_1}`;

export const ERROR_MESSAGES = {
	REQUIRED_FIELD_EMPTY: 'required field',
	EMAIL_NOT_FORMATTED: 'enter proper email id',
	VERIFY_PASSWORD: 'passwords entered do not match'
}
