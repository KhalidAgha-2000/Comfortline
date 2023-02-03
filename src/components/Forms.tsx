import { IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonLabel, IonPage, IonSelect, IonSelectOption } from "@ionic/react"
import { useState } from "react";
import AngerFace from "./AngerFace";

type Props = {
    formSwitch: number;
    title: string;
    question: string;
    setFormSwitch: (val: number) => void;
    continueAndSubmit: () => void;
};

const Forms: React.FC<Props> = ({ formSwitch, title, question, setFormSwitch, continueAndSubmit }) => {
    const [angerFaceChoosen, setAngerFaceChoosen] = useState(false)
    return (
        <div>

            <IonCard className="w-[90%] h-auto p-5 flex flex-col  justify-evenly rounded-[20px] -top-8 z-10 bg-[white] shadow-lg  m-auto">
                <IonCardTitle class='inter text-dark border-b-[1px] border-[#375a6467] w-32 pb-2 text-[12px] uppercase'>
                    {title}
                </IonCardTitle>

                <IonCardSubtitle class='inter text-base lowercase font-semibold pt-5 pb-5 tracking-wide text-dark pr-10'>
                    {question}
                </IonCardSubtitle>

                <div className="faces w-full flex flex-row justify-evenly items-center my-4">

                    <IonImg onClick={() => { setFormSwitch(formSwitch + 1); continueAndSubmit(); setAngerFaceChoosen(false) }} src="/assets/images/smile.jpg" alt="happy" />
                    <IonImg onClick={() => { setFormSwitch(formSwitch + 1); continueAndSubmit(); setAngerFaceChoosen(false) }} src="/assets/images/mood.jpg" alt="mood" />
                    <IonImg onClick={() => { setAngerFaceChoosen(true) }} src="/assets/images/anger.jpg" alt="anger" />

                </div>


            </IonCard>

            {/* Anger Face Options */}
            {
                angerFaceChoosen && formSwitch == 2 ?
                    <AngerFace continueAndSubmit={continueAndSubmit} formSwitch={formSwitch} setAngerFaceChoosen={setAngerFaceChoosen} setFormSwitch={setFormSwitch} option1="I prefer a warmer space." option2="I prefer a colder space." option3="I prefer a colder space." />
                    : angerFaceChoosen && formSwitch == 3 ?

                        <AngerFace continueAndSubmit={continueAndSubmit} formSwitch={formSwitch} setAngerFaceChoosen={setAngerFaceChoosen} setFormSwitch={setFormSwitch} option1="This air is stuffy" option2="I want more fresh air" option3="There are many odors" />

                        : angerFaceChoosen && formSwitch == 4 ?
                            <AngerFace continueAndSubmit={continueAndSubmit} formSwitch={formSwitch} setAngerFaceChoosen={setAngerFaceChoosen} setFormSwitch={setFormSwitch} option1="This light is too low" option2="There's too much light" option3="There's no enough natural light" />

                            : angerFaceChoosen && formSwitch == 5 ?
                                <AngerFace continueAndSubmit={continueAndSubmit} formSwitch={formSwitch} setAngerFaceChoosen={setAngerFaceChoosen} setFormSwitch={setFormSwitch} option1="There's too much ambient noise" option2="I cannot talk in privacy" option3="The colleagues speak too loud" />

                                : ""
            }
        </div>
    )
}

export default Forms