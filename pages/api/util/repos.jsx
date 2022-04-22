import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/Adithii/repos', {
            headers: {
                'Authorization': 'token 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'
            }
        })).json()
    );
};