javascript: (
    function () {
        // Proxy Server URL
        const PROXY_URL = '';

        // Get page information
        const href = document.location.href;
        const original_href = window.proxiedURL;
        if (original_href) {
            // Direct connection when connected through a proxy
            window.location.href = original_href;
        }
        else {
            if (PROXY_URL) {
                // Connect through a proxy when connected directly
                post(PROXY_URL + "index.php", href);
            }
        }

        function post(url, data) {
            // Generate form and input
            let form_ = document.createElement("form");
            let input_ = document.createElement("input");
            // Set up the form
            form_.method = "POST";
            form_.action = url;
            // Set up the input
            input_.type = "hidden";
            input_.name = "url";
            input_.value = data;
            // Place the element
            form_.appendChild(input_);
            document.body.appendChild(form_);
            // Send data
            form_.submit();
        }
    }
)();
