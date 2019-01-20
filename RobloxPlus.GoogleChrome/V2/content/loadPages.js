﻿var RPlus = RPlus || {};
RPlus.Pages = RPlus.Pages || {};

(function () {
	// TODO: Remove chat-data-model as source of truth, it appears this has been removed.
	Roblox.users.authenticatedUserId = $("meta[name='user-data']").data("userid")
		|| $("#chat-data-model").data("userid")
		|| $("#push-notification-registrar-settings").data("userid")
		|| Number((($(".TradeWindowContainer>script").html() || "").match(/Offer\.initialize\((\d+),/) || [0, 0])[1])
		|| 0;

	for (var pageName in RPlus.Pages) {
		if (RPlus.Pages.hasOwnProperty(pageName)) {
			if (typeof (RPlus.Pages[pageName]) != "function") {
				console.warn("Miss-indexed page value:", pageName);
			}

			if(!RPlus.Pages[pageName].hasOwnProperty("patterns") || !Array.isArray(RPlus.Pages[pageName].patterns)){
				console.warn("Missing pattern:", pageName);
				continue;
			}

			var patterns = RPlus.Pages[pageName].patterns;
			for (var i = 0; i < patterns.length; i++) {
				if (patterns[i].test(location.pathname)) {
					console.log("Page:", pageName);
					var patternMatch = location.pathname.match(patterns[i]);
					RPlus.Pages[pageName] = RPlus.Pages[pageName](patternMatch);
					RPlus.Pages[pageName].patterns = patterns;
					break;
				}
			}
		}
	}
})();


// WebGL3D
