import axios from 'axios';

const getLatestRepo = async (data, token) => {
    try {
        const username = data.githubUsername;

        if (token) {
            const res = await axios.get(
                `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
                {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                }
            );
            let repos = res.data.items;
            let latestSixRepos = repos.slice(0,6);
            return latestSixRepos;
        } else {
            const res = await axios.get(
                `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
            );

            let repos = res.data.items;
            let start = repos.length - 6;
            let end = repos.length;
            let latestSixRepos = repos.slice(start,end);
            return latestSixRepos;
        }
    } catch (error) {
        console.error(error)
    }
};

export default getLatestRepo;