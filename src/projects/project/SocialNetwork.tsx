import React from 'react';
import style from './Project.module.scss'
import Button from "../../common/components/button/Button";

type ProjectPropsType = {
    title: string
    description: string
    style: any
}

export const SocialNetwork = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a
                    target={'_blank'}
                    href={'https://github.com/Samurai-way/social-network'}
                    className={style.btn}>view
                </a>
                {/*<Button type={'button'} text={'view'}/>*/}
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

