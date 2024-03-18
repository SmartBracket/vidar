import "@/assets/styles/contacts.scss"

export async function generateMetadata({ params }) {
    return {
        title: 'Контакты',
        description: 'Контакты аптеки.',
        // openGraph: {
        //     images: [article.image ],
        // },
    }
}

export default function Contacts(){
    return (
        <main className="page contacts">
            <div className="container">
                <h1 className="pageTitle">Наши контакты</h1>
                <div className="contacts__contentWrap">
                    <div className="contacts__list">
                        <div className="contacts__item">
                            <strong>Адрес:</strong>
                            <p>Квартал 50-летия Октября, 29, Луганск</p>
                        </div>
                        <div className="contacts__item">
                            <strong>Телефон:</strong>
                            <a href="tel: +79501111111">+79501111111</a> 
                        </div>
                        <div className="contacts__item">
                            <strong>Почта:</strong>
                            <a href="mailto: test@mail.ru">test@mail.ru</a> 
                        </div>
                        <div className="contacts__item">
                            <strong>Телеграм:</strong>
                            <a href="https://t.me/test">@test</a> 
                        </div>
                    </div>
                    <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae5d41bd44c21f60f3faf359b1856f3e7ed7bf0ec2e6b8c8999a0ff78722471cb&amp;source=constructor"
                        width="730" height="588" frameborder="0">
                    </iframe>
                </div>
            </div>
        </main>
    )
}