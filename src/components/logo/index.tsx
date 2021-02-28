import React from 'react';
import styles from './logo.module.scss';

interface Props {
	className: string;
}

const Logo = ({ className }: Props) => {
	return (
		<a className={`${styles.logo} ${className}`}>
			<span className={`${styles.image}`}>cs project</span>
		</a>
	);
};

export default Logo;
