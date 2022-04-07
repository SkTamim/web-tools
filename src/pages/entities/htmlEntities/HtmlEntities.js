import { Box } from "@mui/system";

import ComingSoon from "../../../helper/ComingSoon";

function HtmlEntities() {
	document.title = "Web Tools - Entities";

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "78.5vh",
			}}
		>
			<ComingSoon />
		</Box>
	);
}

export default HtmlEntities;
