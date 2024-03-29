package com.breakapp;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import org.devio.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(null);
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.forceRTL(this,true);
    sharedI18nUtilInstance.allowRTL(this, true);
    // in MainActivity.java
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "breakapp";
  }
}
