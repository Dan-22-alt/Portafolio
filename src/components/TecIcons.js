import React from 'react'
import css from '../iconos/css.png'
import html from '../iconos/html.png'
import js from '../iconos/js.png'
import react from '../iconos/react.png'
import fire from '../iconos/firebase.png'
import node from '../iconos/node.png'
import mongo from '../iconos/mongodb.png'
import material from '../iconos/material-ui.png'
import git from '../iconos/git.png'
import boot from '../iconos/bootstrap.png'
import graphql from '../iconos/graphql.png'
import redux from '../iconos/redux.png'
import web from '../iconos/web.png'
import angular from '../iconos/angular.png'
import mysql from '../iconos/mysql.png'
import slack from '../iconos/slack.png'
import vscode from '../iconos/vscode.png'
import post from '../iconos/postman.png'

const TecIcons = () => {
    return (
        <div className="tecicons">
            <div className="container">
                <div className="tecicons-2">

                    <div className="icon-div">
                        <img src={css} alt="css3" className="iconos"/>
                        <label className="label-tec">CSS</label>
                    </div>
                    <div className="icon-div">
                        <img src={html} alt="html5" className="iconos"/>
                        <label className="label-tec">HTML</label>
                    </div>
                    <div className="icon-div">
                        <img src={js} alt="js" className="iconos"/>
                        <label className="label-tec">JavaScript</label>
                    </div>
                    <div className="icon-div">
                        <img src={react} alt="react" className="iconos"/>
                        <label className="label-tec">React.js</label>
                    </div>
                    <div className="icon-div">
                        <img src={fire} alt="firebase" className="iconos"/>
                        <label className="label-tec">Firebase</label>
                    </div>
                    <div className="icon-div">
                        <img src={node} alt="nodejs" className="iconos"/>
                        <label className="label-tec">Node.js</label>
                    </div>
                    <div className="icon-div">
                        <img src={git} alt="git" className="iconos"/>
                        <label className="label-tec">Git/GitHub</label>
                    </div>
                    <div className="icon-div">
                        <img src={boot} alt="bootstrap" className="iconos"/>
                        <label className="label-tec">Bootstrap</label>
                    </div>
                    <div className="icon-div">
                        <img src={mongo} alt="mongodb" className="iconos"/>
                        <label className="label-tec">MongoDB</label>
                    </div>
                    <div className="icon-div">
                        <img src={material} alt="materialui" className="iconos"/>
                        <label className="label-tec">MaterialUI</label>
                    </div>
                    <div className="icon-div">
                        <img src={graphql} alt="graphql" className="iconos"/>
                        <label className="label-tec">GraphQL</label>
                    </div>
                    <div className="icon-div">
                        <img src={redux} alt="redux" className="iconos"/>
                        <label className="label-tec">React Redux</label>
                    </div>
                    <div className="icon-div">
                        <img src={web} alt="webpack" className="iconos"/>
                        <label className="label-tec">Webpack</label>
                    </div>
                    <div className="icon-div">
                        <img src={angular} alt="angular" className="iconos"/>
                        <label className="label-tec">Angular</label>
                    </div>
                    <div className="icon-div">
                        <img src={mysql} alt="mysql" className="iconos"/>
                        <label className="label-tec">Mysql</label>
                    </div>
                    <div className="icon-div">
                        <img src={slack} alt="slack" className="iconos"/>
                        <label className="label-tec">Slack</label>
                    </div>
                    <div className="icon-div">
                        <img src={vscode} alt="vscode" className="iconos"/>
                        <label className="label-tec">VScode</label>
                    </div>
                    <div className="icon-div">
                        <img src={post} alt="postman" className="iconos"/>
                        <label className="label-tec">Postman</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TecIcons
