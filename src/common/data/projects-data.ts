import socialNetworkImage from '../../assets/image/social-network-background-with-icons_23-2147497535.jpg';
import todoImage from '../../assets/image/todolist.jpg';
import cards from '../../assets/image/Cards2.png';
import counter from '../../assets/image/Counter.jpg';


export const projectsData = [
    {
        id: '1',
        title: 'Todo List',
        description: 'Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios, Redux-Thunk, Material UI, Unit testing, Storybook',
        backgroundImage: `url(${todoImage})`,
        repoLink: 'https://github.com/EkaterinaYurchyk2022/todoFridaySelfEducation',

    },
    {
        id: '2',
        title: 'Social Network',
        description: 'Technology stack: ReactJS, TypeScript, Redux, RestAPI, Axios, Redux-Thunk, React-Router-Dom, Redux-Form, Formik, Ant Design',
        backgroundImage: `url(${socialNetworkImage})`,
        repoLink: 'https://github.com/EkaterinaYurchyk2022/social-network',

    },
    {
        id: '3',
        title: 'Cards',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Redux-Thunk, React-Router-Dom, Axios, Formik, Material UI',
        backgroundImage: `url(${cards})`,
        repoLink: 'https://github.com/EkaterinaYurchyk2022/my-friday-cards-app',

    },
    {
        id: '4',
        title: 'Counter with settings in a separate block',
        description: 'Technology stack: ReactJS, TypeScript, Redux, Unit testing, CSS',
        backgroundImage: `url(${counter})`,
        repoLink: 'https://github.com/EkaterinaYurchyk2022/MyCounter',

    },

]