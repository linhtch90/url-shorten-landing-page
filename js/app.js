$(function () {
    var longUrl = '';

    // Input Url validation
    function validateURL(textval) {
        var urlregex = new RegExp(
            "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
        return urlregex.test(textval);
    };

    // Shorten link with Bitly
    function shortenLink(longUrl) {
        // With Bitly
        // $.bitlr({
        //     apiKey: '23c47f073826eb0cdc1c2abedbb006976e0e0549',
        //     link: longUrl,
        //     anchor: false,
        //     success: function (shortUrl) {
        //         $('#linkOutput').text(shortUrl);
        //     }
        // });

        // With Rel.ink
        $.post(
            'https://rel.ink/api/links/',
            {
                'url': longUrl
            },
            function (data) {
                shortUrl = "https://rel.ink/" + data.hashid;
                $('#linkOutput').text(shortUrl);
            },
        );

    };

    $('#shortUrlButton').click(function () {
        var longUrl = $('#linkInput').val();
        if (validateURL(longUrl)) {
            shortenLink(longUrl);
            $("#formNotification").text("");
        } else {
            // alert("Please enter a valid URL!");
            $("#formNotification").text("*Note: Please enter a valid URL!");
            $('#linkOutput').text("");
        }
    });

});