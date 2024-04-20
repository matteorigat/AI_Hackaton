const url = "http://192.168.79.34:23456";

const sendFile = async function(fileName, data) {
    const path = url + '/send';

    try {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fileName, data })
        });

        if (response.ok) {
            text = await response.json()
                .then(data => data)
                .catch(err => console.log(err));
            
            console.log('File sent successfully!');
            return text;
        } else {
            console.error('Failed to send file:', response.status);
        }
    } catch (error) {
        console.error('An error occurred while sending the file:', error);
    }
}

const summarize = async (text) => {
    const path = url + '/full_text_summarize';
    data = text;
    
    try {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        });
    
        if (response.ok) {
            text = await response.json()
                .then(data => data)
                .catch(err => console.log(err));
            
            return text;
        } else {
            console.log("Failed to receive summary", response.status);
            return null;
        }
    } catch (err) {
        console.error('An error occurred while sending the file:', err);
    }
}

const summarizeSelected = (text) => {
    const path = url + '/short_text_summarize';
}

module.exports = {
    sendFile,
    summarize,
    summarizeSelected
};
