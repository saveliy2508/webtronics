import React, {memo} from 'react';
import s from './QuestionsCard.module.scss'
import classNames from "classnames";
import Image from "next/image";

interface QuestionsCardProps {
    onClick: () => void;
    title: string;
    text: string;
    selected?: boolean;
    className?: string;
}

export const QuestionsCard = memo(({onClick, title, text, selected, className}: QuestionsCardProps) => {
    return (
        <div className={classNames(s.QuestionsCardGradientWrapper, {[s.wrapperSelected]: selected})}>
            <div className={classNames(s.QuestionsCard,{[s.QuestionsCardSelected]: selected}, [className])}>
                    <main className={s.content}>
                        <div className={classNames(s.title, {[s.titleSelected]: selected})}>{title}</div>
                        {selected &&
                            <div className={s.text}>{text}</div>
                        }
                    </main>
                <div className={s.selector}>
                    <div className={s.selectorIcon} onClick={onClick}>
                        {selected ?
                            <Image
                                width={'16'}
                                height={'2'}
                                src={'/minus.svg'}
                                alt={'minus icon'}
                            />
                            :
                            <Image
                                width={'10'}
                                height={'10'}
                                src={'/plus.svg'}
                                alt={'plus icon'}
                            />}
                    </div>
                </div>
            </div>
        </div>
    );
}, (prev, next) => {
    return prev.selected === next.selected;
});
