window.addEventListener('onBitrixLiveChat', function (event) {
    let widget = event.detail.widget;
    widget.subscribe({
        type: BX.LiveChatWidget.SubscriptionType.sessionStart,
        callback: function (event) {
            let creds = Comagic.getCredentials(),
                event_data = {
                    bitrix_im_id: widget.getUserId(),                    
                    comagic_visitor_id: creds && creds['session_id'] || null,
                    host: widget.host
                }
            fetch('https://custom.comagic.ru/bitrix_integration/client/save_visitor_im', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(event_data)
            }).then();
        }
    })
});

