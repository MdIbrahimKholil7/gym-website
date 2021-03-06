import { useEffect, useState } from 'react'
import service1 from '../images/service4.jpg'
import service2 from '../images/service10.jpg'
import service3 from '../images/service3.jpg'
import service4 from '../images/service6.jpg'
import service5 from '../images/service7.jpg'
import service6 from '../images/service8.jpg'
import service7 from '../images/service9.jpg'
const details = [
    {
        img: service1,
        name: 'Exercise Consultation',
        desc: 'This 2-hour session includes goal-setting, assessment, program design and equipment orientation.',
        id: 10,
        price:13
    },
    {
        img: service7,
        name: 'Personal Training',
        desc: 'A personal fitness trainer will work with your group of 2-4 people to help you achieve your fitness goals.',
        id: 11,
        price:11
    },
    {
        img: service4,
        name: 'Customized Group Training',
        desc: 'Find your group, find your trainer, book your time! Three easy steps to set up your own small group training sessions with a certified City of Edmonton Personal Trainer.',
        id: 12,
        price:7
    },
    {
        img: service5,
        name: 'Private Personal Training',
        desc: 'A personal fitness trainer will work with you one-on-one to create a custom program based on your goals, history and needs. ',
        id: 13,
        price:10

    },
    {
        img: service6,
        name: 'Customized Group Training',
        desc: 'Find your group, find your trainer, book your time! Three easy steps to set up your own small group training sessions with a certified City of Edmonton Personal Trainer.',
        id: 14,
        price:15
    },
    {
        img: service2,
        name: 'Private Personal Training',
        desc: 'A personal fitness trainer will work with you one-on-one to create a custom program based on your goals, history and needs. ',
        id: 15,
        price:20
    },

]
const useService = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(details)
        
    }, [])
    return [data, setData]
}

export default useService