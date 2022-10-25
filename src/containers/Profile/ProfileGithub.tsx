import React, { useEffect } from "react";
import { getGithubRepos } from "../../actions/profile";
import { GithubRepoType } from "../../global.types";
import { useAppDispatch } from "../../hooks/hooks";

interface GithubProps {
	username: string;
	repos: GithubRepoType[];
}

export const ProfileGithub = ({ username, repos }: GithubProps) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getGithubRepos(username));
	}, [dispatch, username]);

	return (
		<div className=" max-w-screen-xl mx-auto text-center py-5 w-4/5 md:max-w-screen-2xl">
			<div>
				<div>
					<h2 className=" text-2xl font-bold text-[#e8e8e8]">Github Repos</h2>
					{repos.map((repo) => (
						<div key={repo.name}>
							<div className="max-w-6xl my-6 py-4 rounded-md bg-[#d7d7d7]">
								<h4 className="text-xl font-semibold">
									<a
										href={repo.html_url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{repo.name}
									</a>
								</h4>
								<p>{repo.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
