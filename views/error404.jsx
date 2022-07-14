const React = require('react')
const Def = require('./layouts/default')


function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="https://stickershop.line-scdn.net/stickershop/v1/product/4107300/LINEStorePC/main.png;compress=true" alt="anime angry bread"/>
            </main>
        </Def>
    )
}
      


module.exports = error404
