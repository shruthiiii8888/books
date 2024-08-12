// JavaScript for displaying topic content dynamically
function showTopicContent(topic) {
    const topicContent = {
        'topic1': 'Content for Topic 1 goes here.',
        'topic2': 'Content for Topic 2 goes here.'
        // Add more topic content as needed
    };

    const topicContentElement = document.querySelector('.topic-content');
    topicContentElement.innerHTML = topicContent[topic];
}
