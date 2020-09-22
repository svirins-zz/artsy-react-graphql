import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Ant Design here
import './styles/global.less';





import App from "./App";

import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.REACT_APP_ARTSY_ENDPOINT_URL,
	}),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ApolloProvider>
		,{" "}
	</React.StrictMode>,
	document.getElementById("root")
);
