import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed(state => !state);

    return <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
        <Button onClick={onToggle}>Toggle</Button>
        <div className={cls.switchers}>
            <ThemeSwitcher />

        </div>
    </div>
}