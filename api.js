(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_question_title = function(question_number) {
        return "Hey Folks...";
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'Get Question Title No. %n', 'get_question_title', 1],
        ]
    };

    // Register the extension
    ScratchExtensions.register('FameMedia QuizMaker Scratch API', descriptor, ext);
})({});
