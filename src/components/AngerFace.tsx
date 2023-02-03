import { IonHeader, IonIcon, IonImg, IonTitle } from '@ionic/react';
import { helpCircleOutline } from 'ionicons/icons';
import { useState } from 'react';

type Props = {
    formSwitch: number;
    option1: string;
    option2: string;
    option3: string;
    setFormSwitch: (val: number) => void;
    setAngerFaceChoosen: (val: boolean) => void;
    continueAndSubmit: () => void;

};

const AngerFace: React.FC<Props> = ({ option1, option2, option3, setFormSwitch, setAngerFaceChoosen,continueAndSubmit, formSwitch }) => {
    return (
        <div className='w-full px-4'>

            <span className='text-[#FF6666] font-normal text-xs leading-4'>
                Choose an option
            </span>

            <div onClick={() => { setFormSwitch(formSwitch + 1);continueAndSubmit(); setAngerFaceChoosen(false) }} className='w-full my-3 h-[60px] rounded-[16px] px-3 bg-[#f2F2F2] flex items-center justify-start'>
                <p className='Inter text-[14px] leading-4 -tracking-tight font-semibold text-[#375a64] opacity-40'>{option1}</p>
            </div>


            <div onClick={() => { setFormSwitch(formSwitch + 1);continueAndSubmit(); setAngerFaceChoosen(false) }} className='w-full my-3 h-[60px] rounded-[16px] px-3 bg-[#f2F2F2] flex items-center justify-start'>
                <p className='Inter text-[14px] leading-4 -tracking-tight font-semibold text-[#375a64] opacity-40'>{option2}</p>
            </div>

            <div onClick={() => { setFormSwitch(formSwitch + 1);continueAndSubmit(); setAngerFaceChoosen(false) }} className='w-full my-3 h-[60px] rounded-[16px] px-3 bg-[#f2F2F2] flex items-center justify-start'>
                <p className='Inter text-[14px] leading-4 -tracking-tight font-semibold text-[#375a64] opacity-40'>{option3}</p>
            </div>
        </div>
    )
}
export default AngerFace