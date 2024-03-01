export type TBuildMode = 'development' | 'production';
export type TBuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: TBuildPaths;
    isDev: boolean;
    apiUrl: string;
    port: number;
    project: 'storybook' | 'frontend' | 'jest';
}

export interface IBuildEnv {
    mode: TBuildMode;
    apiUrl: string;
    port: number
}
