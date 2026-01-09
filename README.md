# my-first-static-web-app
Quickstart: Build your first static web app
Now that the repository is created, you can create a static web app from the Azure portal.

1)Go to the Azure portal.
2)Select Create a Resource.
3)Search for Static Web Apps.
4)Select Static Web Apps.
5)Select Create.

In the Basics section, begin by configuring your new app and linking it to a GitHub repository.
**Setting**             **Value**
Subscription	      Select your Azure subscription.
Resource Group	    Select the Create new link, and enter static-web-apps-test in the textbox.
Name	              Enter my-first-static-web-app in the textbox.
Plan type	          Select Free.
Source	            Select GitHub and sign in to GitHub if necessary.

If necessary sign in with GitHub, and enter the following repository information.
**Setting	 **           **Value**
Organization	      Select your organization.
Repository	        Select my-first-web-static-app.
Branch	            Select main.

In the Build Details section, add configuration details specific to your preferred front-end framework.
1)From the Build Presets dropdown, select Custom.
2)In the App location box, enter ./src.
3)Leave the Api location box empty.
4)In the Output location box, enter ./src.

Select Review + create.

Select Create.

Select Create.

Select Go to resource.

View the website
There are two aspects to deploying a static app. The first creates the underlying Azure resources that make up your app. The second is a workflow that builds and publishes your application.

Before you can go to your new static site, the deployment build must first finish running.

The Static Web Apps Overview window displays a series of links that help you interact with your web app.

1)Selecting on the banner that says, Select here to check the status of your GitHub Actions runs takes you to the GitHub Actions running against your repository. Once you verify the deployment job is complete, then you can go to your website via the generated URL.

2)Once GitHub Actions workflow is complete, you can select the URL link to open the website in new tab.

Clean up resources
If you're not going to continue to use this application, you can delete the Azure Static Web Apps instance through the following steps:
1)Open the Azure portal.
2)Search for my-first-web-static-app from the top search bar.
3)Select the app name.
4)Select Delete.
5)Select Yes to confirm the delete action (this action may take a few moments to complete).
