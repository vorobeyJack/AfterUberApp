# AfterUber test app.

# Used technologies

 **Frontend:**
* React
* React Router
* Semantic ui

 **Backend:**
* Node.js
* Express

# Install

To install dependencies

```shell
npm run load
```

Also, you have to(before npm start):
- copy server/config/auth.js.dist && client/src/config/auth.js.dist to auth.js
- Paste the following creds into these files:

 **GOOGLE_API_KEY = 'AIzaSyAovSkn6jR7enJsaVVNxffePpt3Vno8PK0';**
 **UBER_SERVER_TOKEN = 'rXFtyR-_8FnRpknNVFkDlkb1Psi_B-bdVa2mD_Pf';**
 
# Run

To run app

```shell
npm start
```
 
Проект представляет собой простое веб-приложение, которое взаимодействует с
UBER API посредством API прослойки(node.js->express).

Пользователю предлагается ввести начальный и конечный адрес, после чего при нажатии кнопки "GET PRICE"
выводится список цен для разных видов AfterUber(AfterUberX,AfterUberBlack и тд) с учетом скидки 20%.



Комментарии по улучшению текущей кодовой базы:
- исправление ошибки с Current Location
- использование https://github.com/tomchentw/react-google-maps вместо текущей 
https://www.npmjs.com/package/react-google-location (довольно скромный функционал/CORS ошибки внутри пакета при загрузке данных)
- модульные тесты(Jest,Enzyme), фукциональные(Mocha)
- пересмотр UI/UX подхода(возможно - добавление Redux/Mobx для хранения состояния)
- разбиение контейнер-компонентов(AddressForm) на более мелкие
- PWA

Потенциально новый функционал:
- добавление интерактивной карты
- хранение информации о поездках пользователя
- добавление платежной системы и системы бонусов - промокоды и тд

Потенциальный скеллинг:
- нагрузка на UI/UX - оптимизация скорости работы/отклика приложения
- кеширование данных фронт/бек
- обработка статики c помощью Nginx вместо node.js
- вынесение определенных частей приложения в отдельные сервисы
- использование очередей для ресурсозатратных операций 

