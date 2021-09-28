const express = require('express')
const app = express()
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();
const PORT = process.env.PORT || 3000;

app.ws('/notificationHandler', (ws, req) => {
})

app.get('/sendMessage', async (req, res) => {
    try {
        aWss.clients.forEach(c => {
            c.send(`Send Random Message ${new Date().toISOString()}`);
        })

        res.json({
            isSend: 'OK'
        });
    } catch (e) {
        console.log(e);
        res.json({
            isSend: 'NOT OK'
        });
    }
})

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))

