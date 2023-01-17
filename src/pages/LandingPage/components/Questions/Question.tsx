import React, {useState} from 'react';
import s from './Question.module.scss';
import Image from "next/image";
import {QuestionsCard} from "./QuestionsCard/QuestionsCard";
import {questionsCardData} from "./consts/questionsCardData";
import {BackgroundQuestions} from "./BackgroundDecoration/BackgroundQuestions";

export const Question = () => {
    const [selectedCard, setSelectedCard] = useState<number>(1);

    const onClickHandle = (id: number) => {
        if (id === selectedCard) {
            setSelectedCard(0)
        } else {
            setSelectedCard(id)
        }
    }

    return (
        <section className={s.Question} id={'questions-block'}>
            <BackgroundQuestions />
            <div className={s.title}>Frequently Asked <br/> Questions</div>
            <div className={s.content}>
                <div className={s.leftBlock}>
                    <div className={s.text}>
                        Do you have any kind of questions? <br/> We are here to help.
                    </div>
                    <div className={s.questionMark}>
                        <Image
                            width={'1200'}
                            height={'1600'}
                            src={'/questionMark.png'}
                            alt={'question mark'}
                        />
                    </div>
                </div>
                <div className={s.cards}>
                    {questionsCardData.map(item => (
                        <QuestionsCard
                            key={item.id}
                            onClick={() => onClickHandle(item.id)}
                            title={item.title}
                            text={item.text}
                            selected={selectedCard === item.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
