import React, { ReactElement } from 'react';
import styled from 'styled-components';
interface Props {
	children: React.ReactNode;
}

function index({ children }: Props): ReactElement {
	return <button>{children}</button>;
}

export default index;
