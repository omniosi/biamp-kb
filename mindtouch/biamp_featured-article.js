var desc = {{$description ?? $2 ?? ""}};
$(document).ready(function() {
    $("div.featured-article-content").html("<p>" + desc + "</p>");
});
});