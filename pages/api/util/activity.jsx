import fetch from 'isomorphic-unfetch';

export default async function Activity(req, res) {
    res.json(
        await (await fetch('https://linkcord.js.org/api/v3/user/852664297620504616')).json()
    );
};