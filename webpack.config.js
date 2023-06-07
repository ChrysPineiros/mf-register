const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

    name: 'mfRegister',

    exposes: {
        './RegisterModule': './src/app/register/register.module.ts',
    },

    /* shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }, */
    shared: share({
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@angular/common/http": { singleton: true, strictVersion: true },
        "@mycne/lib-design-system":  { singleton: true, strictVersion: true, requiredVersion: '0.0.11' },
      }),

});

moduleFederationConfig.output.publicPath = 'http://localhost:4202/';
//moduleFederationConfig.output.publicPath = 'http://localhost/mf-register/';
module.exports = moduleFederationConfig;