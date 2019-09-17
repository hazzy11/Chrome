class Settings extends React.Component {
	render() {
		let tabs = [
			{
				label: "About",
				class: About
			},
			{
				label: "Appearance",
				class: AppearanceSettings
			},
			{
				label: "Navigation",
				class: NavigationSettings
			},
			{
				label: "Notifications",
				class: NotificationSettings
			},
			{
				label: "Other",
				class: OtherSettings
			}
		];

		return (
			<div class="section">
				<div class="container-header">
					<h1>Roblox+ Settings</h1>
				</div>
				<div>
					<VerticalTabs tabs={tabs} />
				</div>
			</div>
		);
	}
}

if (location.search.includes("rplus")) {
	var container = $("<div id=\"rplus-settings\" class=\"page-content\">");
	$("#user-account").hide().after(container);
	ReactDOM.render(<Settings />, container[0]);
}

// WebGL3D