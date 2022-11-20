
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDAte, setSlectedDate }) => {

    return (
        <div className="hero py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg w-1/2 shadow-2xl" alt='banner' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDAte}
                        onSelect={setSlectedDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;