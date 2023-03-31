import express from 'express';
import {GitHubIssuesController} from "../controller/GitHubIssuesController";

const router = express.Router();

const REPOS = 'repos';
const ISSUES = 'issues'

router.get("/:org/:repository/issues/", async (req, res) => {
  const resources = `${REPOS}/${req.params.org}/${req.params.repository}/${ISSUES}`;
  const query = !!req.query ? Object.entries(req.query).reduce((pre, cur) => `${pre}&${cur[0]}=${cur[1]}`, '?') : '';
  const url = resources + query;

  try {
    const controllerRes = await GitHubIssuesController.getIssues(url)
    res.status(controllerRes.status).json(controllerRes.data);
  } catch(err) {
    console.error('issues router', `ERROR`, err.code, err.response.data);
    res.status(err.response.status).json({
      devMessage: err.response.data,
      message: err.message,
    });
  };

});

export default router;
