export interface AlertType {
	id: string;
	msg: string;
	alertType: string;
}

export interface AuthType {
	token: string | null;
	isAuthenticated: boolean | null;
	loading: boolean;
	user: UserType | null;
}

export interface UserType {
	_id: string;
	name: string;
	email: string;
	avatar: string;
	date: Date;
}

export interface LoginType {
	email: string;
	password: string;
}

export interface RegisterType extends LoginType {
	name: string;
}

export interface ErrorType {
	msg: string;
	value?: any;
	param?: string;
	location?: string;
}

export interface ProfileErrType {
	msg: string;
	statusText: string;
}

export interface ProfileType {
	_id?: string;
	user?: {
		_id: string;
		name: string;
		avatar: string;
	};
	bio?: string;
	githubusername?: string;
	company?: string;
	website?: string;
	location?: string;
	status: string;
	skills: string[];
	social?: {
		twitter?: string;
		linkedin?: string;
		instagram?: string;
	};
	experience?: ExperienceType[];
	education?: EducationType[];
}

export interface EducationType {
	_id?: string;
	school: string;
	course: string;
	fieldOfStudy: string;
	from: Date;
	to?: Date | null;
	current?: boolean;
	description: string;
}

export interface ExperienceType {
	_id?: string;
	title: string;
	company: string;
	location: string;
	from: Date;
	to?: Date | null;
	current?: boolean;
	description?: string;
}

export interface GithubRepoType {
	id?: number;
	name?: string;
	full_name?: string;
	description?: string;
	html_url: string;
}
