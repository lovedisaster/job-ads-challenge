import express from 'express';
import {logIn} from '../services/loginService';
import {getRuleForClient} from '../services/ruleService';

var router = express.Router();

router.get('/rules/:clientCode', function (req, res) {
    const rule = getRuleForClient(req.params.clientCode)
    res.json(rule);
});

router.get('/login/:clientCode', function (req, res) {
    const isAuth = logIn(req.params.clientCode)
    res.json(isAuth);
});

export default router;