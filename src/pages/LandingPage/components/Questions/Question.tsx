import React, {useEffect, useState} from 'react';
import s from './Question.module.scss';
import Image from "next/image";
import {QuestionsCard} from "pages/LandingPage/components/Questions/QuestionsCard";
import {IQuestionCardData, questionsCardData} from "./consts/questionsCardData";

export const Question = () => {
    const [cards, setCards] = useState<IQuestionCardData[]>(questionsCardData);
    const [selectedCard, setSelectedCard] = useState<number>(1);

    const onClickHandle = (id: number) => {
        if(id === selectedCard){
            setSelectedCard(0)
        } else {
            setSelectedCard(id)
        }
    }

    return (
        <div className={s.Question}>
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
                    {cards.map(item => (
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
        </div>
    );
};
